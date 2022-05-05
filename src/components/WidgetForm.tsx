import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';
import { useState } from "react";

const FeedbackType = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de uma inseto'
    }
  },
  IDEIA: {
    title: "Idéia",
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem'
    }
  }
}

type FeedbackType = keyof typeof FeedbackType;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu comentário</span>
        
        <CloseButton />
      </header>
      {!feedbackType ? (
        <div className="flex py-8 gap-2 w-full">
          {Object.entries(FeedbackType).map(([key, value]) => {
            return (
              <button key={key}
                type="button"
                onClick={() => setFeedbackType(key as FeedbackType)}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
              >
                <img alt={value.image.alt} src={value.image.source}/>
                <span>{value.title}</span>
              </button>
            )
          })}
        </div>
      ): (
        <p>Hello Word</p>
      )}
      
      
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://github.com/AnaPerola">Ana</a>
      </footer>
    </div>
  )
}