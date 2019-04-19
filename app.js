const filesystem = require('fs')



filesystem.writeFileSync('notes.txt','second thing u wann write');

filesystem.appendFileSync('notes.txt','   appended text');