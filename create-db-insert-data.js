use students;

db.createCollection('mentors');
db.createCollection('tasks');
db.createCollection('users');
db.createCollection('topics');
db.createCollection('attendance');
db.createCollection('codekata');
db.createCollection('courses');
db.createCollection('company_drives');
db.createCollection('students_activated_courses');

 db.mentors.insertMany([
    {
        mentorid:1,
        mentorname:"sekar",
        mentor_email:"sekar@outlook.com",
		mobile_num:""
    },
      {
        mentorid:2,
        mentorname:"bharath",
        mentor_email:"bharath@gmail.com",
		mobile_num:""
    },
      {
        mentorid:3,
        mentorname:"vino",
        mentor_email:"vino@outlook.com",
		mobile_num:""
    },
      {
        mentorid:4,
        mentorname:"surya",
        mentor_email:"surya@gmail.com",
		mobile_num:""
    },
      {
        mentorid:5,
        mentorname:"ansari",
        mentor_email:"ansari@gmail.com",
		mobile_num:""
    }
    ])
	
db.users.insertMany([
    {
        user_id:1,
        name:"Vijay",
        email_id:"Vijay@gmail.com",
		mobile_num:"9677119542",
    	batch_id:"216",
	    mentor_id:1
    },
     {
        user_id:2,
        name:"Saro",
        email_id:"Saro@gmail.com",
		mobile_num:"",
    	batch_id:"216",
        mentorid_id:2
    },
     {
        user_id:3,
        name:"Priya",
        email_id:"Priya@outlook.com",
		mobile_num:"",
    	batch_id:"216",
        mentorid_id:1
    },
     {
        user_id:4,
        name:"Raj",
        email_id:"Raj@gmail.com",
		mobile_num:"",
    	batch_id:"216",
        mentorid_id:3
    },
     {
        user_id:5,
        name:"Jansi",
        email_id:"Jansi@gmail.com",
		mobile_num:"",
    	batch_id:"214",
        mentorid_id:2
    }
    
    ])
 
db.codekata.insertMany([
    {
        user_id:1,
        codekata_problem: "HTML",
		codekata_solved : "N"
    },
     {
        user_id:1,
        codekata_problem: "Javascript",
		codekata_solved : "Y"
    },
     {
        user_id:3,
        codekata_problem: "Springboot",
		codekata_solved : "Y"
    },
     {
        user_id:3,
        codekata_problem: "JAVA",
		codekata_solved : "N"
    },
     {
        user_id:5,
        codekata_problem: "Javascript",
		codekata_solved : "N"
    }
    ])