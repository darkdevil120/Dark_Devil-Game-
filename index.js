// Platform detection logic
    if (window.Telegram && window.Telegram.WebApp) {
      // Telegram environment detected
      loadTelegramGame();
    } else {
      // Default to website environment
      loadWebsiteGame();
    }