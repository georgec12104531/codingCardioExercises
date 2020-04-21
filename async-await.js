obj1 = {
  task: () => {
    setTimeout(() => {
      console.log('Job A is complete')
    }, 500)
  }
}

obj2 = {
  task: () => {
    setTimeout(() => {
      console.log('Job B is complete')
    }, 300)
  }
}


obj3 = {
  task: () => {
    setTimeout(() => {
      console.log('Job c is complete')
    }, 300)
  }
}

async function executeAsyncTask(tasks) {

  for(let i = 0; i< tasks.length; i++) {
    let gcPromise = new Promise((resolve) => {
      if(resolve) {
        tasks[i].task();
      }
    })

    await gcPromise
  }
 

  // await gcPromise
}

executeAsyncTask([obj1, obj2, obj3])
