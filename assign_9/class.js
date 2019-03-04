class House {
    constructor(location,walls, doors, windows){
        this.location = location
        this.walls = walls;
        this.doors = doors;
        this.windows = windows;
    }
    floorp(){
        let information = ("\nLocation:  "+this.location+"\nWalls:  "+this.walls+"\nDoors:  "+this.doors +"\nWindows: "+ this.windows);
        return information;
    }
}
class Living_Room extends House {
    constructor(location,walls,doors,windows,seats){
        super(location,walls,doors,windows);
        this.seats = seats;
    }
    floorp(){
        let information = super.floorp() + "  Seats: "+this.seats;
        return information
    }
}

let home = new House("Jefferson",4,12,17);
let room = new Living_Room("Jefferson",4,12,17,8);
let apartment = new House("Albany",4,1,1);
let bedroom = new Living_Room("Albany",4,1,1,3);


function print_this_sucka(name){
    let p = document.createElement("p");
    let texts = document.createTextNode(name.floorp());
    p.appendChild(texts);
    const pb = document.getElementsByClassName("house");
    pb[0].appendChild(p);
}

print_this_sucka(home);
print_this_sucka(room);
print_this_sucka(apartment);
print_this_sucka(bedroom);