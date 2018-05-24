var os = require('os');
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

    var input = process.stdin.read();

    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction === '/exit') {
            process.stdout.write('Quitting app!\n');
            process.exit();
        } else {
            process.stderr.write('Wrong instruction\n');
        }
    }
});

var type = os.type();

switch (type) {
    case 'Linux':
        console.log('The version of Node.js is:', process.versions.node);
        console.log('The system language is:', process.env.lang);
        break;
    case 'Darwin':
        console.log('The version of Node.js is:', process.versions.node);
        console.log('The system language is:', process.env.lang);
        break;
}