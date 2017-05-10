//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//config.
var enjoyhint_script_steps = [{
    "next #one": '<p>Click on Login Button to move to next screen</p>'
}
];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();