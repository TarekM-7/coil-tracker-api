import { Table, Column, Model, DataType } from 'sequelize-typescript'

@Table({
    tableName: 'coils'
})

class Coil extends Model {
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare name: string

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false
    })
    declare weight: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false
    })
    declare width: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false
    })
    declare progression: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false
    })
    declare thickness: number
}

export default Coil