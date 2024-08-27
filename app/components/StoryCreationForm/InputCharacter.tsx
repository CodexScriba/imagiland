import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import StoryFormField from "./StoryFormField";

interface CharacterFieldProps {
  field: any;
  updateProgress: () => void;
}

const CharacterField: React.FC<CharacterFieldProps> = ({ field, updateProgress }) => (
  <StoryFormField
    label="Who should appear in this story?"
    description={`Characters: ${field.value.length} | At least one character is required.`}
  >
    <div className="flex items-center space-x-2">
      <Input
        placeholder="E.g., Noah, Daniel, Grandma Guis"
        {...field}
        onChange={(e) => {
          field.onChange(e);
          updateProgress();
        }}
      />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button type="button" size="icon" variant="outline">
              <Plus className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add more characters</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </StoryFormField>
);

export default CharacterField;
