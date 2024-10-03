const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [{
				name: "",
				phone: "",
				email: "",
				address: "",
				id: ""
			}],
			agenda: "alejandro_agenda"
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getAgenda: () => {
				const {agenda} = getStore();
				fetch(`https://playground.4geeks.com/contact/agendas/${agenda}`, {
					method: "GET"
				})
				.then((response) => response.json())
				.then(data => setStore ({contacts : data.contacts}))
			},
			
			addContact: (contact) => {
				const {agenda, contacts} = getStore();
				fetch(`https://playground.4geeks.com/contact/agendas/${agenda}/contacts`, {
					method: "POST", 
					body: JSON.stringify(contact),
					headers:{"Content-Type": "application/json"}
				}).then((response) => response.json())
				.then((data) => {setStore({contacts: [...contacts, data]})})
			},

			deleteContact: (id) => {
				const {agenda, contacts} = getStore();
				fetch (`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${id}`, {
					method: "DELETE",
					headers:{"Content-Type": "application/json"}
					}).then (() => {
						const newContacts = contacts.filter((contact) => contact.id !== id);
						setStore ({contacts: newContacts})
					})
			},

			updateContact: (contact) => {
				const {agenda, contacts} = getStore();
				fetch (`https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${contact.id}`, {
					method: "PUT",
					body: JSON.stringify(contact),
					headers:{"Content-Type": "application/json"}
					}).then((response) => response.json())
					.then((data) => {
						const newContacts = contacts.map((contactItem) => {
							if(contactItem.id == contact.id)
								return data
							else return contactItem
						})
						setStore ({contacts: newContacts})
					})
			},
		}
	};
};

export default getState;
