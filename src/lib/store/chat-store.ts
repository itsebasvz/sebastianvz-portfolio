import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChatState {
    isOpen: boolean;
    hasInteracted: boolean;
    setIsOpen: (isOpen: boolean) => void;
    toggleOpen: () => void;
    setHasInteracted: (hasInteracted: boolean) => void;
}

export const useChatStore = create<ChatState>()(
    persist(
        (set) => ({
            isOpen: false,
            hasInteracted: false,
            setIsOpen: (isOpen) => set({ isOpen }),
            toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
            setHasInteracted: (hasInteracted) => set({ hasInteracted }),
        }),
        {
            name: 'chat-ui-storage',
            partialize: (state) => ({ hasInteracted: state.hasInteracted }),
        }
    )
);
