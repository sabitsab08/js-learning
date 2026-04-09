const accountId = 222
let accountEmail = 'jayedinbisabit@gmail.com'
var accountPassword = 'fsdjwefnf'
accountCity = "Dhaka"
let accounState;

//accountId = 2; //not allowed .Will show big error

accountEmail = 'sabitsab08@gmail.com'
accountPassword = 123456
accountCity = "Sirajganj"


console.table([accountId,accountEmail,accountPassword,accountCity,accounState])

/*
─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ 0       │ 222                    │
│ 1       │ 'sabitsab08@gmail.com' │
│ 2       │ 123456                 │
│ 3       │ 'Sirajganj'            │
│ 4       │ undefined              │
└─────────┴────────────────────────┘
*/
/*
Prefer not to use var
because of issue in block scope and functional scope
*/