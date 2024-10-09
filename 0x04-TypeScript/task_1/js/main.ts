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