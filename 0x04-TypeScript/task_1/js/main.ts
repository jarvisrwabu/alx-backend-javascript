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