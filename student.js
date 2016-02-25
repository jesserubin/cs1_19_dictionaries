// Write a function as specified in each of the paragraphs below.

// Write a function callled `showPerson`.  It takes a dictionary with
// attributes 'name' and 'email'.  It gives back a string. For example,
// showPerson({'name': 'Daniel Bergey', 'email': 'dbergey@friendscentral.org'})
// returns "Daniel Bergey <dbergey@friendscentral.org>"

var showPerson = function(p) {
    return p.name + " <" + p.email + ">";
};

// Write `showDate`.
// Input: {year: 1970, month: 01, day:01, hour: 0, minute: 0, second: 0}
// Output: "1970-01-31T12:59:59" Note the T between date and time

var showDate = function(d) {
    if (d.day < 10) {
        d.day = "0" + d.day;
    }
    if (d.month < 10) {
        d.month = "0" + d.month;
    }
    if (d.year < 10) {
        d.year = "0" + d.year;
    }
    if (d.hour < 10) {
        d.hour = "0" + d.hour;
    }
    if (d.minute < 10) {
        d.minute = "0" + d.minute;
    }
    if (d.second < 10) {
        d.second = "0" + d.second;
    }
    return d.year + "-" + d.month + "-" + d.day + "T" + d.hour + ":" + d.minute + ":" + d.second;
};

// compareInts
// Input: 2 integer numbers
// Output: one of "LT", "EQ", or "GT" (less than, equal, or greater than)

var compareInts = function(a,b) {
    if (a > b) {
        return "GT";
    }
    if (a < b) {
        return "LT";
    }
    if (a == b) {
        return "EQ"
    }
};

// compareDates
// Input: Two dates, in the format:
// {year: 1969, month: 7, day: 24, hour: 16, minute: 50, second: 35}
// Output: one of "LT", "EQ", or "GT"

var compareDates = function(a,b) {
    if (a.year > b.year) {
    return "GT";
    }
    if (a.year < b.year) {
    return "LT";
    }
    else {
        if (a.month > b.month) {
            return "GT";
        }
        if (a.month < b.month) {
            return "LT";
        }
        else {
            if (a.day > b.day) {
                return "GT";
            }
            if (a.day < b.day) {
                return "LT";
            }
            else {
                if (a.hour > b.hour) {
                    return "GT";
                }
                if (a.hour < b.hour) {
                    return "LT";
                }
                else {
                    if (a.minute > b.minute) {
                        return "GT";
                    }
                    if (a.minute < b.minute) {
                        return "LT";
                    }
                    else {
                        if (a.second > b.second) {
                            return "GT";
                        }
                        if (a.second < b.second) {
                            return "LT";
                        }
                        else {
                            return "EQ"
                        }
                    }
                }   
            }
        }
    }
};

// elementOf
// Input: a String and a list of Strings
// Output: true or false (lowercase - these are JS keywords)
// return true if the first input is present in the list (second input)

var elementOf = function(a,b) {
    var w = 0;
    while (w < b.length) {
        if (a == b[w]) {
            return true;
        }
        w++;
    }
    return false;
};

// hasTag
// Input: a String and an Email
// Email has the following attributes:
// sender, recipients, subject, date, body, tags
// Output: true or false
// return true if the first input is present in the tags of the email

var hasTag = function(a,b) {
   if (b.tags.includes(a)) {
       return true;
   }
   else {
       return false;
   }
};

// filterByTag
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list with those emails that have the first input in their tags
// return the emails in the same order they appear in the input
// use hasTag

var filterByTag = function(a,b) {
    var e = 0;
    var L = [];
    while (e < b.length) {
        if (hasTag(a,b[e])) {
            L.push(b[e]);
        }
        e++;
    }
    return L;
};

// parseYear
// Input: String, in the format "2016"
// Output: Int, 2016
// use `parseInt`:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

var parseYear = function(p) {
    var j = parseInt(p,10);
    return j;
};

// parseDate
// Input: String, in the format"2016-01-20T13:41:00"
// Output: A Date dictionary, with the attributes:
// year, month, day, hour, minute, second
// use parseInt and substr:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

var parseDate = function(d) {
    return {
        year: parseInt(d.substr(0,4), 10),
        month: parseInt(d.substr(5,2), 10),
        day: parseInt(d.substr(8,2), 10),
        hour: parseInt(d.substr(11,2), 10),
        minute: parseInt(d.substr(14,2), 10),
        second: parseInt(d.substr(17,2), 10),
    };
};

// inSubject
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'subject' field of the Email
// use .includes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

var inSubject = function(a,b) {
    if (b.subject.includes(a)) {
        return true;
    }
    else {
        return false;
    }
};

// filterBySubject
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their subject
// use inSubject

var filterBySubject = function(a,b) {
    var e = 0;
    var L = [];
    while (e < b.length) {
        if (inSubject(a,b[e])) {
            L.push(b[e]);
        }
        e++;
    }
    return L;
};

// inBody
// Input: a String and an Email, in the same format as hasTag
// Output: true or false
// return true if the first input is part of the 'body' field of the Email

var inBody = function(a,b) {
    if (b.body.includes(a)) {
        return true;
    }
    else {
        return false;
    }
};

// filterByBody
// Input: a String and a list of Emails
// Output: a list of Emails
// return a list of the emails that have the first email in their body
// use inBody

var filterByBody = function(a,b) {
    var e = 0;
    var L = [];
    while (e < b.length) {
        if (inBody(a,b[e])) {
            L.push(b[e]);
        }
        e++;
    }
    return L;
};


$(document).ready(function() {

    var i = 1;
    while (i < emails.length) {
        console.log(i);
        $("ol").append(
            "<li>" + "<input type='checkbox'>" + "</input>" + emails[i].sender.name + "<span class='date'>" + emails[i].date.month + "/" + emails[i].date.day + "/" + emails[i].date.year + "</span>" + "<blockquote class='subject'>" + emails[i].subject + "</blockquote>" + "</li>"
        );
        i = i + 1;
    }
});