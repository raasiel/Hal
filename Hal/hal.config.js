var halConfig = {
    actions: {
        prev: {
            text:"Previous",
            cmd: "prebuilt.cmd.prev"
        },
        next: {
            text: "Next",
            cmd: "prebuilt.cmd.next"
        },
        cancel: {
            text: "Cancel",
            cmd: "prebuilt.cmd.exit_with_warning"
        }
    },
    steps: {
        intro: {
            header_text: "",
            body_text: "",
            renderer: "prebuilt.view.message"
        },
        change_security_settings : {
            header_text: "Change Security Settings",
            body_text: "Specify how users will login to CRA Wiz and Fair Lending Wiz",
            renderer: "prebuilt.view.flow_downward",
            layout:"flow",
            children: [{
                    type: "text",
                    text: "You can change how users will be able to login to CRA Wiz and Fair Lending Wiz. Please choose one of the option below"
            }, {
                type: "radio",
                options: [
                    { value: "1", text: "Wiz Login Mode(Default)" },
                    { value: "2", text: " Active Directory Login Mode" }
                ]
            }
            ]
        },
        server_information: {
            header_text: "Setup needs the system administrtor user name, password and the name of SQL Server ",
            body_text: "You want to install the data to:",
            renderer: "prebuilt.view.flow_downward",
            layout:"flow",
            children: [{
                type: "input",
                text: "Sql Server:"
            }, {
                type: "radio",
                options: [
                    { value: "1", text: "Use Windows Authentication" },
                    { 
                        value: "2", 
                        text: "Use Sql Server Authentication",
                        layout:"flow",
                        children:[
                            {type:"input", text:"User Name"},
                            {type:"password", text:"Password"},

                        ]
                    }
                ]
            }
            ]
        }
    },       
    usercss: "my.css"
}