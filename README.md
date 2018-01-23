Basic ToDo using Hapijs v17.2.0

### Installing
To download package dependencies, run
```sh
npm install
```

### Running
After the installation is complete, start your postgres server and start your ToDo app
```sh
npm start
```

### Try it out
```sh
curl -X POST -H "Content-Type: application/json" -d '{"text":"standup meeting at 4:00pm"}' http://localhost:8088/todos
curl -X GET http://localhost:8088/todos
curl -X GET http://localhost:8088/todos/1
curl -X PUT -H "Content-Type: application/json" -d '{"text":"standup meeting at 5:00pm"}' http://localhost:8088/todos/1
curl -X DELETE http://localhost:8088/todos/1
```
