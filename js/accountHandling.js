/*class AccountDetails {
    constructor (email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

function logIn(email, password) {
    let targetUser = getUser(email);

    if (targetUser == undefined) {
        return "Invalid email!";
    }

    if (targetUser.password != password) {
        return "Invalid password!";
    }

    setCurrentUser(targetUser);

    return true;
}

function logOut() {
    if (getCurrentUser() == undefined) {
        pageredirect.href = cib_login.html;
        
        return;
    }

    setCurrentUser(undefined);
    setIncidentPages();
}

function addLogin(email, password, role) {
    let accounts = getAccounts();

    if (accounts == null || accounts == undefined) {
        accounts = {};
    }

    if (accounts[email] != undefined) {
        return;
    }

    accounts[email] = new AccountDetails(email, password, role);

    setAccounts(accounts);
}

function getUser(email) {
    let accounts = getAccounts();

    if (accounts == undefined) {
        return undefined;
    }

    return accounts[email];
}

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem("currentUser"));
}

function setCurrentUser(user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
}

function getAccounts() {
    return JSON.parse(sessionStorage.getItem("accounts"));
}

function setAccounts(accounts) {
    sessionStorage.setItem("accounts", JSON.stringify(accounts));
} */

function setIncidentPages() {
    let pageredirect_incident = document.getElementById("incidentpage");
    let role = sessionStorage.getItem("signuprole");
    //if (pageredirect_incident == undefined || pageredirect_incident == null) {
    //    return;
    //}

    //let currentUser = getCurrentUser();
    //if (currentUser == null) {
        //return;
    //}

    if (role == "Major Incident Management Staff - (MIM)") {
        pageredirect_incident.href = "cib_incidentreport_mim.html";
    }
    else if (role == "Non Incident Response Team - (NIRT)") {
        pageredirect_incident.href = "cib_incidentreport_nirt.html";
    }
    else if (role == "Business Users - (BU)") {
        pageredirect_incident.href = "cib_incidentreport_bu.html";
    }
    else if (role == "Problem Management Team - (PMT)") {
        pageredirect_incident.href = "cib_incidentreport_pmt.html";
    }
}


function accessibilityman() {
    event.preventDefault();
}