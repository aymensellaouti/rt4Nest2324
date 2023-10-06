import { ValidationArguments } from 'class-validator';

export const lengthError = (isMin = true) => {
  let lengthMessage = 'inférieur';
  if (!isMin) lengthMessage = 'supérieur';

  return (validationArguments: ValidationArguments) => {
    /* Le champ name ne doit pas avoir une taille inférieur 4 */
    return `Le champ ${validationArguments.targetName} .... ${lengthMessage}`;
  };
};
