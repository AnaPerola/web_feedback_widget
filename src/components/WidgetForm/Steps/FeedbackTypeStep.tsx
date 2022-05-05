import { FeedbackType, feedbackType } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return(
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu comentário</span>
        
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackType).map(([key, value]) => {
          return (
            <button key={key}
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" 
            >
              <img alt={value.image.alt} src={value.image.source}/>
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}