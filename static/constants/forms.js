export const schema = [
    {
        class: "w-100 style-global-input",
        type: "text",
        name: "fullName",
        placeholder: "Nom complet",
        validation: "required",
        "validation-messages": {
            required: "Nom complet est requis.",
        },
    },
    {
        class: "w-100 style-global-input",
        type: "email",
        name: "email",
        placeholder: "Email",
        validation: "required|email",
        "validation-messages": {
            required: "Email est requis.",
            email: "Cette forme ne convient pas ex: magstore@magstore.com",
        },
    },
    {
        class: "w-100 style-global-input",
        type: "number",
        name: "phoneNumber",
        placeholder: "Numéro de téléphone",
        validation: "required",
        "validation-messages": {
            required: "Numéro de téléphone est requis.",
        },
    },
    {
        class: "w-100 style-global-input",
        type: "text",
        name: "homeAdress",
        placeholder: "Adresse",
        "validation-messages": {
            required: "Adress est requis.",
        },
        validation: "required",
    },
    {
        component: "div",
        class: "btn-submit",
        children: [
            {
                class: "btn-click-submit",
                type: "submit",
                label: "Valider la commande",
            },
        ],
    },
]