export const CNAPP_DASHBOARD_TREE = [
    {
        category: "CSPM Executive Dashboard",
        label: "CSPM",
        id: 7,
        isFolder: true,
        children: [
            {
                widget_name: "Cloud Accounts",
                id: 8,
                type: "checkbox",
                checked: false,
                children: [
                    { name: "Connected", value: 2, fill: "#83a6ed" },
                    { name: "Not Connected", value: 2, fill: "#DEDEDE" }
                ]
            },
            {
                widget_name: "Cloud Accounts Risk Assignment",
                checked: false,
                id: 9,
                type: "checkbox",
                children: [
                    { name: "Flailed", value: 300, fill: "red" },
                    { name: "Warning", value: 200, fill: "yellow" },
                    { name: "Not available", value: 300, fill: "#83a6ed" },
                    { name: "Passed", value: 150, fill: "green" }
                ]
            }
        ]
    },
    {
        category: "CWPP Dashboard:",
        label: "CWPP",
        id: 12,
        isFolder: true,
        children: [
            {
                widget_name: "Top 5 Namespace Specific Alerts",
                id: 20,
                checked: false,
                type: "checkbox",
                children: []
            },
            {
                widget_name: "Workload Alerts",
                id: 399,
                checked: false,
                type: "checkbox",
                children: []
            }
        ]
    },
    {
        category: "Registry Scan",
        label: "Images",
        id: 677,
        isFolder: true,
        children: [
            {
                widget_name: "Image Risk Assignment",
                widget_text: "Total  Vulnerabilities",
                id: 788,
                checked: false,
                type: "checkbox",
                children: [
                    { name: "No_issue", value: 318,  fill: "green" },
                    { name: "Medium", value: 70,  fill: "#565767" },
                    { name: "able", value: 220,  fill: "#b3b3b3" },
                    { name: "High", value: 90,  fill: "red" },
                    { name: "Low", value: 190,  fill: "yellow" },
                    { name: "Critical", value: 90,  fill: "#702315" }
                ],
              
            },
        ]
    }

]


