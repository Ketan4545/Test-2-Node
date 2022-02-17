var cron = require('node-cron');
const {Jobs} = require("./config");

async function getJob(){
 
const snapshot = await Jobs.get();
const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));






var task = cron.schedule('59,0,1,37,38,36 * * * *', () => {
  console.log('running a task every minute');
  console.log(list)
});


task.start();
//task.stop();
}

getJob()