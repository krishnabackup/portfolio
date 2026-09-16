import AIresume from '../../public/assets/resumes/Krishna_Darsh_E_K_Resume_AI.pdf'
import Fullstackresume from '../../public/assets/resumes/Krishna_Darsh_E_K_Resume.pdf'
export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl glass p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Choose Resume
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href={AIresume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border p-4"
            onClick={onClose}
          >
            Full Stack Resume
          </a>

          <a
            href={Fullstackresume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border p-4"
            onClick={onClose}
          >
            AI / ML Resume
          </a>
        </div>
      </div>
    </div>
  )
}