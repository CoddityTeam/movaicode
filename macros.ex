defmodule MovaiCode3.Aime.Les.Macros do
  @s_il_vous_plait_coddity "Elixir"
  @pour_le_prochain_movaicode "Macro"
  @oubliez_pas_le_petit_elixir __ENV__
  defp dans_la_liste_des_langages(
    a,
    b,
    d,
    c) do
      :"#{a}.#{b}.#{c}".location(
        d
        )
      end
  @merci_d_avance "Env"
  defmacro __using__(_ignore_moi_ça) do
    quote do
      require unquote(
        __MODULE__)
      import unquote(
        __MODULE__)
    end
  end
  defmacro hehe(

  ) do ?=
end
  defmacro haha(
  ) do Kernel.div(?P,?\b) * Kernel.div(hehe(), ?<)
end
  defmacro je_vous_declare_mon_module(
    a,
    b
    ) do
    quote do
      Module.create(unquote(a),
      unquote(
        b
        ), unquote(

      dans_la_liste_des_langages(@s_il_vous_plait_coddity,
@pour_le_prochain_movaicode,
    @oubliez_pas_le_petit_elixir,
                                      @merci_d_avance)
        ))
    end
  end
                  defmacro triangle(ç,
    é)        do
    quote do unquote(ç)                                                                                                                           |> unquote(é) end
                                              end
  defmacro maquereau(a,
  b
) do quote do
      [unquote(a)
      |      unquote(b)] end      end
                                          defmacro machin_vide() do [] end
end
