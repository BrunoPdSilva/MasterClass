# Masterclass - Manipulando a DOM

  - DOM(Document Object Model);

## Seletores
  - `.getElementById` (returns the element);
  - `.getElementByClassName` (return HTMLCollection);
  - `.getElementByTagName` (return HTMLCollection);
  - `.querySelector` (returns element);
  - `.querySelectorAll` (returns NodeList);

## Manipulando conteúdo
  - `.textContent`;
  - `.innerText`;
  - `.innerHTML`;
  - `.value (inputs)`;

### Alterando estilos
  - `.style.backgroundColor = "color"`;
  - `.classList` -> .add() | .remove() | .toggle();

## Navegando pelos elementos
  **Parents**:
    - `.parentNode`
    - `.parentElement`
  
  **Children**:
    - `.childNodes` (returns NodeList); <!-- TAMBÉM PEGA ESPAÇOS EM BRANCOS -->
    - `.children` (returns HTMLCollection);
    - `.childElementCount`;
    - `.firstChild / .firstElementChild`;
    - `.lastChild / .lastElementChild`;
    - `.remove()` (Remove o elemento);
  
  **Siblings**:
    - `.nextSibling / .nextElementSibling` (Returns the next sibling);
    - `.previousSibling / .previousElementSibling` (Returns the previous sibling);

## Criando Elementos
 - `.createElement(<TagHTML>)`; 

## Inserindo elementos no HTML
 - `.insetBefore()`; let insertNode = parentNode.insertBefore(newNode, referenceNode);
 - `.insetAfter()`; let insertNode = parentNode.insertAfter(newNode, referenceNode);
 - `.append() / .appendChild()`; (Colocar após alguma coisa);
 - `.prepend()`; (Colocar antes de alguma coisa);
  
## Trabalhando com propriedades dos elementos
  - `.setAttribute("class", "text-large")`;
  - `.getAttribute()`;
  - `.removeAttribute()`;

## Você sabia?
  - Cada ramificação da árvore, é um nó (node, element) e cada nó contém um objeto.
  - É possível aplicar o método .forEach em NodeList, mas não em HTMLCollection (ver compatibilidade do navegador).
  - Você pode converter uma NodeList em um Array, usando `Array.from()` (ver compatibilidade do navegador).