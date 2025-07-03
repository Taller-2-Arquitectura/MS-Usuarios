const { PrismaClient: MariaClient } = require('../../prisma/generated/mariadb');

const mariadb = new MariaClient();

module.exports = {
  mariadb
};