const speeds = [];

const getSolTransactionspeed = async (connection, data, name) => {
  try {
    await findSpeed(connection).then((transaction) => {
      if (name) {
        const newdata = {};
        newdata.name = name;
        newdata.transaction = transaction;
        data.push(newdata);
      } else {
        data.transaction = transaction;
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const findSpeed = (connection) => {
  return new Promise((resolve, reject) => {
    let timesRun = 0;
    let interval = setInterval(async () => {
      const count = await connection
        .getTransactionCount()
        .then((res) => JSON.stringify(res))
        .catch((error) => console.log(error));
      speeds.push(Number(count));
      timesRun += 1;
      if (timesRun === 20) {
        clearInterval(interval);
        transaction = findavg();
        resolve(transaction);
      }
    }, 1000);
  });
};

const findavg = () => {
  for (i = 0; i < speeds.length; i++) {
    speeds[i] = speeds[i + 1] - speeds[i];
  }
  speeds.pop();
  return Math.floor(speeds.reduce((a, b) => a + b) / speeds.length);
};

module.exports = { getSolTransactionspeed };
