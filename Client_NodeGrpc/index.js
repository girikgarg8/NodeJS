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
client.listTodo({}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(response);
});
