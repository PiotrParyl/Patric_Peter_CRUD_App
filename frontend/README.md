## Frontend <--> Backend connection 

### URL name
```javascript
"/create-task"
```

### Request Options
```javascript
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(tasks),
};
```

### First sending data via POST
```javascript
[
  {
    id: "task_demo_0",
    title: "Task1",
    description: "This is my first task",
  },
  {
    id: "task_demo_1",
    title: "Task2",
    description: "This is my second task",
  },
  {
    id: "task_demo_2",
    title: "Task3",
    description: "This is another task",
  },
  {
    id: "task_demo_3",
    title: "Task4",
    description: "One more task here",
  },
]
```


## Demo App View

![image](https://user-images.githubusercontent.com/99507865/188202217-7f63e7b4-dcd0-4699-bd22-53b9786b46ce.png)

![image](https://user-images.githubusercontent.com/99507865/188202284-4f509dde-a9f6-4304-9d06-c5f20fecb6a6.png)
