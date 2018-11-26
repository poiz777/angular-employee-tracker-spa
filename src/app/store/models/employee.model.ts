export class EmployeeModel {
    public id: number;
    public employeeNumber: string;
    public payload: object;
    public firstName: string;
    public lastName: string;
    public department: string;
    public thumbnail: string;
    public position: string;


    constructor(payload: object) {
        let _key: any;
        this.payload                = payload;
        this.id                     = (_key = this.payload['id'])             !== undefined ? _key : '';
        this.lastName               = (_key = this.payload['lastName'])       !== undefined ? _key : '';
        this.firstName              = (_key = this.payload['firstName'])      !== undefined ? _key : '' ;
        this.employeeNumber         = (_key = this.payload['employeeNumber']) !== undefined ? _key : '';
        this.department             = (_key = this.payload['department'])     !== undefined ? _key : '';
        this.position               = (_key = this.payload['position'])       !== undefined ? _key : '';
        this.thumbnail              = (_key = this.payload['thumbnail'])      !== undefined ? _key : '';
    }

    toObject() {
      return this.payload;
    }

}

