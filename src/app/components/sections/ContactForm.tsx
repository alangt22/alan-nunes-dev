"use client";

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mrbeplgg");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  if (state.succeeded) {
    return (
      <div className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center card-hover">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-400 text-sm sm:text-base">Obrigado pelo contato. Vou responder o mais breve possível.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleFormSubmit} 
      className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover"
      aria-labelledby="form-title"
    >
      <h2 id="form-title" className="text-xl sm:text-2xl font-bold text-white mb-2">Envie uma mensagem</h2>
      <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Preencha o formulário abaixo e entrarei em contato</p>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Nome
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder='Seu nome completo'
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-slate-800/50 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-gray-500 text-sm sm:text-base"
            required
            aria-required="true"
          />
          <ValidationError prefix="Nome" field="name" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-2" />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder='seu@email.com'
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-slate-800/50 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-gray-500 text-sm sm:text-base"
            required
            aria-required="true"
          />
          <ValidationError prefix="E-mail" field="email" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-2" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            placeholder='Como posso ajudar?'
            className="w-full px-4 py-3 rounded-lg sm:rounded-xl bg-slate-800/50 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all text-white placeholder:text-gray-500 resize-none text-sm sm:text-base"
            rows={4}
            required
            aria-required="true"
          />
          <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-2" />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 py-3 sm:py-4 rounded-lg sm:rounded-xl text-white font-semibold flex items-center justify-center gap-2 relative z-10 text-sm sm:text-base"
          disabled={state.submitting || isSubmitting}
          aria-busy={state.submitting || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Enviar Mensagem
            </>
          )}
        </button>
      </div>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-xs sm:text-sm" role="alert">
          <p>Por favor, preencha todos os campos corretamente.</p>
        </div>
      )}
    </form>
  );
}

