class Vehicle{
    constructor(type,wheels,capacity){
        this.type = type;
        this.wheels = wheels;
        this.capacity = capacity;
    }

    drive(gas){
        setInterval(()=>{
            if(gas >= 0) console.log (gas, "\n");
            gas -= 10
            if(gas < 0) clearInterval;
        },1000)
       ;
    }
}

const car = new Vehicle ("car",4,5);
car.drive(100);