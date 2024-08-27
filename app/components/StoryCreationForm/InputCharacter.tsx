'use client'
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CharacterInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CharacterInput: React.FC<CharacterInputProps> = ({ value, onChange }) => {
  const [characters, setCharacters] = useState<string[]>(value ? value.split(';').map(c => c.trim()) : []);
  const [newCharacter, setNewCharacter] = useState('');

  const addCharacter = () => {
    if (newCharacter.trim()) {
      const updatedCharacters = [...characters, newCharacter.trim()];
      setCharacters(updatedCharacters);
      onChange(updatedCharacters.join('; '));
      setNewCharacter('');
    }
  };

  const removeCharacter = (index: number) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
    onChange(updatedCharacters.join('; '));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Enter a character name"
          value={newCharacter}
          onChange={(e) => setNewCharacter(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              addCharacter();
            }
          }}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button type="button" size="icon" variant="outline" onClick={addCharacter}>
                <Plus className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add character</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-wrap gap-2">
        {characters.map((character, index) => (
          <div key={index} className="flex items-center bg-gray-100 rounded-full px-3 py-1">
            <span>{character}</span>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="ml-2 h-5 w-5"
              onClick={() => removeCharacter(index)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterInput;