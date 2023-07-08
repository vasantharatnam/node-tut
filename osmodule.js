// info about current user

const user = os.userInfo();

console.log(user);

// method returns the system uptime in seconds

const systemUptime = os.uptime();

console.log(systemUptime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);