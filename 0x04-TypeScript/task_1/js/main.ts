interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // This is an optional attribute
    location: string;
    [key: string]: any;          // Allows additional attributes with any name and type

};

interface Directors extends Teacher {
    numberOfReports: number;
};

// Interface defining the structure of the printTeacher function
interface PrintTeacherFunction {
    (fName: string, lName: string): string; // Parameters and return type
}

const printTeacher : PrintTeacherFunction = (fName: string, lName: string) => {
    const t1 = fName.charAt(0);
    const t2 = lName;  
    return t1.concat(".", t2);
};


// Interface for the constructor
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}


// Interface for the class
interface StudentClassInterface {
    firstName: string;
    lastName: string;

    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(x: string, y: string){
        this.firstName = x;
        this.lastName = y; 
    }

    workOnHomework(): string {
        const myString = "Currently working";
        return myString;
    }

    displayName(): string {
        return this.firstName;
    }
};