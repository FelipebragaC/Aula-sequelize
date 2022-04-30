module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
			{
				Status: "confirmado",
				estudante_id: 1,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			Status: "confirmado",
			estudante_id: 2,
			turma_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			Status: "confirmado",
			estudante_id: 3,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			Status: "confirmado",
			estudante_id: 4,
			turma_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			Status: "cancelado",
			estudante_id: 1,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			Status: "cancelado",
			estudante_id: 2,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
