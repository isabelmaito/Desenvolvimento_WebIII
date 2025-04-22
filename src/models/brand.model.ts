import { DataTypes, Model, Optional } from "sequelize";
import { Brand } from "../interfaces/brand.interface";
import sequelize from "../config/database";


type BrandCreationalAttributes = Optional<Brand, "id">;


export class BrandModel extends Model<Brand, BrandCreationalAttributes> {
    public id!: number;
    public description!: string;    
}

BrandModel.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        field: "id_marca"
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "descricao",
    }
}, {
    tableName: "marca",
    sequelize,
    timestamps: false,
}
)