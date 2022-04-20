'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Pessoas', [{
         Nome: 'Mariana Braga',
         Ativo: false,
         Email:'marianatesteg@gmail.com',
         Role:'estudante',
         createdAt:new Date(),
         updatedAt:new Date()
       },
       {
        Nome: 'Felipe Braga',
        Ativo: true,
        Email:'felipeteste@hotmail.com',
        Role:'estudante',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
