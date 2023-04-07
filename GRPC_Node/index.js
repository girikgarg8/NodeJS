const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./todo.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var todoService = protoDescriptor.TodoService;
const server = new grpc.Server();

const todos = [{
    id: '1',
    title: 'Todo1',
    content: 'Content of todo 1'
},
{
    id: '2',
    title: 'Todo2',
    content: 'Content of todo 2'
}
];

server.addService(todoService.service, {
    // below I am defining the RPCs 
    listTodos: (call, callback) => {
        callback(null, { todos: todos }); // error first callback, as error is null                                                                    
    },
    createTodo: (call, callback) => {
        let incomingNewTodo = call.request;
        todos.push(incomingNewTodo);
        callback(null, incomingNewTodo);
    },
    getTodo: (call, callback) => {
        let incomingRequest = call.request;
        let todoId = incomingRequest.id;
        const response = todos.filter((todo) => todo.id == todoId);
        if (response.length > 0) {
            callback(null, response);
        } else {
            callback({
                message: 'Todo not found'
            }, null);
        }
    }
});

server.bindAsync('localhost:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start();
});
