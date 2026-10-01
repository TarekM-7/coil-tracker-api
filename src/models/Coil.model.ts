import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'coils'
})

class Coil extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.DECIMAL(10, 4)
    })
    declare weight: number

    @Column({
        type: DataType.DECIMAL(10, 4)
    })
    declare width: number

    @Column({
        type: DataType.DECIMAL(10, 4)
    })
    declare progression: number

    @Column({
        type: DataType.DECIMAL(10, 4)
    })
    declare thickness: number
}

export default Coil