// src/components/LandingCTA.tsx
import React from 'react';

interface LandingCTAProps {
  // 如果以后你想传更多参数给组件，就在这里定义类型
}

const LandingCTA: React.FC<LandingCTAProps> = () => {
  const handleCtaClick = () => {
    // 1. 滚动到表单
    const formEl = document.getElementById('lead-form');
    formEl?.scrollIntoView({ behavior: 'smooth' });

    // 2. dataLayer 埋点
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'landing_cta_click',
    });

    // 3. 给所有 .form-option-card 加动画
    const optionCards = document.querySelectorAll<HTMLElement>('.form-option-card');
    optionCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('highlight-pulse');
        setTimeout(() => {
          card.classList.remove('highlight-pulse');
        }, 800);
      }, index * 200);
    });
  };

  return (
    <div
      className="bg-primary px-4 sm:px-6 py-4 text-white text-center cursor-pointer relative shadow-lg rounded-sm"
      onClick={handleCtaClick}
    >
      <h2 className="text-lg sm:text-xl font-semibold">
        Get a Free Quote & Demo Today!
      </h2>
    </div>
  );
};

export default LandingCTA;
