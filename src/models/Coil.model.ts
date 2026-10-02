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
        allowNull: false,
        get() {
            return Number(this.getDataValue('weight'))
        }
    })
    declare weight: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false,
        get() {
            return Number(this.getDataValue('width'))
        }
    })
    declare width: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false,
        get() {
            return Number(this.getDataValue('progression'))
        }
    })
    declare progression: number

    @Column({
        type: DataType.DECIMAL(10, 4),
        allowNull: false,
        get() {
            return Number(this.getDataValue('thickness'))
        }
    })
    declare thickness: number
}

export default Coil