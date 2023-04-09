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
const todoService = protoDescriptor.foo;
const client = new todoService.TodoService('localhost:50051', grpc.credentials.createInsecure());

console.log(client)
// Call the listTodos function on the server
client.listTodo({}, (err, todos) => {
    if (!err) {
        console.log(todos);
        client.createTodo({id:4,title:'third todo',content:'hiiiii'},(err,todo)=>{
            if (!err){
                console.log('Created a new todo');
                client.listTodo({},(err,todos)=>{
                    console.log ("After insertion",todos);
                })
            }
            else console.log(err);
        })
    }
    console.log(todos);
});
