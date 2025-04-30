export const NotUserFound = () => {
  return (
    <div className="px-ui-dash py-6 bg-ui-background flex flex-col gap-6">
      <h2 className="text-2xl text-ui-gray-100">
        Nenhum usuário encontrado
      </h2>
      <p className="text-ui-gray-300">Nenhum usuário encontrado na base de dados, tente novamente mais tarde ou verifique a api.</p>
    </div>
  )
}