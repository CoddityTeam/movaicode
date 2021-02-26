# movaicode3.ex 
Effectue un surprenament cryptique "string split" sur le thème du groupe Daft Punk.

## Elixir 🧪
Eh non, `.ex` ce n'est pas `.exe` avec un `e` en moins, mais bien l'extension de fichier d'Elixir, un langage fabuleux !

Elixir n'était pas dans la liste, mais il est si adapté à la tâche que je n'ai pu m'empécher de commettre cet exotisme.

En effet, Elixir offre des macros puissantes et une syntaxe surprenante. Pour le meilleur ... comme pour le pire.

## Pourquoi trois fichiers ?
Pour faire simple, j'ai besoin de macros pour rendre le code plus beau et rapide, donc j'ai un fichier qui les déclare de façon magnifique `macros.ex`.

Ducoup `split.ex` a besoin de `macros.ex` mais ne peut pas les importer tout seul car les macros font tomber le compilateur sous un tel charme qu'il en perd ses moyens.

Ainsi on a besoin de `movaicode3.ex` qui vient charger `macros.ex` puis `split.ex` avec beaucoup d'efficacité et de clarté.

## Comment le lancer ? 🥼
Quoi ? Vous me dites que vous n'avez jamais codé en Elixir ???
Bon, ça reste entre nous, mais intallez-le discrètement...

Une fois Elixir 1.11.2 (+ Erlang/OTP 21) installé, faites `elixir movaicode3.ex` et amusez-vous bien :)

-----
## Les macros d'Elixir 🧩
Vous ne comprenez pas mon code ? Normal. 

Par contre vous voudriez peut-être comprendre pourquoi les macros Elixir sont la meilleur chose qui soit arrivée à l'informatique ces 20 dernières années !

Exemple de macro qui parlera à tous les développeurs de loggers :
```elixir
#Quelque part
defmacro log_info(string) do
    prefix = "[INFO]" 
    quote do
        IO.puts(unquote(prefix) <> "[#{ <> __MODULE__}]> " <> string)
    end
end
```

```elixir
#Dans n'importe quel autre module (pensez namespace ou classe même si c'est pas du tout pareil)
defmodule MonSuperProgramme do
#   ...
    def main() do
        log_info("hello")
    end
#   ...
end
```

Ce qui nous donne à l'appel de `MonSuperProgramme.main()`:
```
[INFO][MonSuperProgramme]> hello
```
Bref, Elixir >> Go 😏