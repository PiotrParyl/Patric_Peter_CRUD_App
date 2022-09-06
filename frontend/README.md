# Frontend <--> Backend connection 

## Endpoint names

### GET
```javascript
"/fetch-task-list"
```

### POST 
```javascript
"/create-task"
```

## Request Options (POST)
```javascript
const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(tasks),
};
```

## First Expecting Data in DB
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

## Async Functions

### GET
```javascript
useEffect(() => {
    const fetchTaskList = async () => {
      const url = "/fetch-task-list";
      const response = await fetch(url);

      if (!response.ok) {
        const msg = "Fetching tasks data failed!";
        throw new Error(msg);
      }

      const taskListData = await response.json();

      setTasks(taskListData);
    };

    fetchTaskList().catch((err) => {
      throw new Error(err.message);
    });
  }, []);
```

### POST
```javascript
useEffect(() => {
    const dispatchTaskList = async () => {
      const url = "/create-task";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasks),
      };
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        const msg = "Sending cart data failed!";
        throw new Error(msg);
      }
    };

    /* PREVENT SEND DATA AFTER BROWSER REFRESH */
    if (!IS_INIT) {
      IS_INIT = true;
      return;
    }

    dispatchTaskList().catch((err) => {
      throw new Error(err.message);
    });
  }, [tasks]);
```


# Demo App View

![image](https://user-images.githubusercontent.com/99507865/188202217-7f63e7b4-dcd0-4699-bd22-53b9786b46ce.png)

![image](https://user-images.githubusercontent.com/99507865/188202284-4f509dde-a9f6-4304-9d06-c5f20fecb6a6.png)
