module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      // Отправляем email на dmitry_kolesnikov@bizan.pro
      await strapi.plugins['email'].services.email.send({
        to: 'dmitry_kolesnikov@bizan.pro',
        from: process.env.SMTP_USERNAME || 'noreply@bizan.pro',
        subject: `Новое обращение с сайта от ${result.name}`,
        html: `
          <h2>Новое обращение с сайта БИЗАН</h2>
          <p><strong>Имя:</strong> ${result.name}</p>
          <p><strong>Телефон:</strong> ${result.phone}</p>
          ${result.email ? `<p><strong>Email:</strong> ${result.email}</p>` : ''}
          <p><strong>Сообщение:</strong></p>
          <p>${result.message}</p>
          <hr>
          <p><small>Дата: ${new Date(result.createdAt).toLocaleString('ru-RU')}</small></p>
        `,
      });

      console.log(`✅ Email отправлен на dmitry_kolesnikov@bizan.pro для обращения #${result.id}`);
    } catch (error) {
      console.error('❌ Ошибка отправки email:', error);
    }
  },
};
