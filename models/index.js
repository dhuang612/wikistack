const Sequelize = require('sequelize')
//I needed to update this string to allow connnection.
const db = new Sequelize('postgres://postgres:@localhost:5432/wikistack', {
    logging: false
})


const Page = db.define('page', {
    title: {
        type: Sequelize.DataTypes.STRING ,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    db, Page, User
}
