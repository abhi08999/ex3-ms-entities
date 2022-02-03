
import EntityBase from "submodules/ex3-ms-framework/common/ex3-ms-dtos/entity-base";
import { Entity, ManyToMany } from "typeorm";
import { EmployeeEntity } from "./employee.entity";


@Entity('department')
export class DepartmentEntity extends EntityBase {

    @ManyToMany(() => EmployeeEntity, employee => employee.departments)
    employees: EmployeeEntity[];

}