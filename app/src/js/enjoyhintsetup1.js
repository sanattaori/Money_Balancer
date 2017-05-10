//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//config.
var enjoyhint_script_steps = [{
    "next #liste": '<p>Table shows List of expenses with your contacts</p>'},
    {
    	"next #addn": '<p>Add new entry with contact when updated seen to both</p>'
    },
    {
    	"next #dom": '<p>All your entry in one place</p>'
    },
    {
    	"next #addn": '<p>Add new entry with your friends when updated seen to both</p>'
    },
    {
    	"next #likek": '<p>click if you like the prototype all your suggestions are welcome</p>'
    }

];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();