
const pwdModule = require('./pwd');
let {pwd} = pwdModule;

const lsModule = require('./ls');
let {ls} = lsModule;

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	if(cmd === 'pwd'){
		pwd();
	}
	else if(cmd === 'ls'){
		ls();
	}

});

