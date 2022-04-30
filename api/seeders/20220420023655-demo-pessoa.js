module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				Nome: 'Ana Souza',
				Ativo: true,
				Email: 'ana@ana.com',
				Role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Marcos Cintra',
				Ativo: true,
				Email: 'marcos@marcos.com',
				Role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Felipe Cardoso',
				Ativo: true,
				Email: 'felipe@felipe.com',
				Role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Sandra Gomes',
				Ativo: false,
				Email: 'sandra@sandra.com',
				Role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Paula Morais',
				Ativo: true,
				Email: 'paula@paula.com',
				Role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				Nome: 'Sergio Lopes',
				Ativo: true,
				Email: 'sergio@sergio.com',
				Role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
